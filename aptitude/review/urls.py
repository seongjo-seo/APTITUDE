from django.urls import path
from . import views

# review urls
urlpatterns = [
  path('review_post', views.review_post, name="review_post"),
  path('review_detail', views.review_detail, name="review_detail"),
  
]