from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import openai
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.vectorstores import Chroma

# Create your views here.
# @api_view(["GET"])
# def getProducts(request):

class Index(APIView):
    def post(self, request):
        data = request.data
        print(data, data.get('age'), data.get('gender'), data.get('size'), data.get('occassion'), sep='\n')
        return Response('Check console :)', status=status.HTTP_200_OK)
