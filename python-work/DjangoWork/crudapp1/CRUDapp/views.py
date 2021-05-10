from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def main(request):
  return HttpResponse("This is the first view of my Django backend web app!")
