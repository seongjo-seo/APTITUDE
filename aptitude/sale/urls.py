from django.urls import path
from . import views

# review urls
urlpatterns = [
  path('sale_list', views.sale_list, name="sale_list"),
  path('sale_detail', views.sale_detail, name="sale_detail"),
  
]