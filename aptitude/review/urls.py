from django.urls import path
from . import views

# review urls
urlpatterns = [
  path('post', views.order, name="post"),
  path('detail', views.order, name="detail"),
  
]