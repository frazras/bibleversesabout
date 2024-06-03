from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse
from fastapi.responses import StreamingResponse
import asyncio
import time
from ..llm import *

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access variables securely
LLM_MODEL = os.getenv('LLM_MODEL', 'gpt-4-turbo')  # Provide a default value if not set
API_KEY = os.getenv('API_KEY')
BASE_URL = os.getenv('BASE_URL', 'https://api.openai.com/v1')  # Provide a default value if not set


router = APIRouter()

@router.get('/')
async def index():
    return JSONResponse({"message": "Welcome to the API"}, status_code=200)

@router.post('/getverses')
async def answer(request: Request):
    data = await request.json()
    message = data.get('query')

    async def generate():
        async for response in generate_response(message, LLM_MODEL, API_KEY, BASE_URL):
            yield response

    return StreamingResponse(generate(), media_type='text/plain')