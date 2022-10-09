from django.shortcuts import render
# from .serializers import UserSerializer
# from .models import User


def login(request):
  return render(request, 'login.html', {})

def signup(request):
  return render(request, 'signup.html', {})


# 회원가입
# class UserCreate(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer