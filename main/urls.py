from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('text_retrieval/', views.text_retrieval_input, name='text_retrieval'),
    path('text_retrieval_output/', views.text_retrieval_output, name='text-retrieval_output'),
    path('image_retrieval/', views.image_retrieval_input, name='image_retrieval'),
    path('image_retrieval_output/', views.image_retrieval_output, name='image_retrieval_output'),
    path('text_summarizer/', views.text_summarizer_input, name='text_summarizer'),
    path('text_summarizer_output/', views.text_summarizer_output, name='text_summarizer_output'),
    path('stt/', views.speech_to_text, name='stt'),
    path('question_generation/', views.question_generation_input, name='question_generation'),
    path('question_generation_output/', views.question_generation_output, name='question_generation_output'),
]