from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
  id = models.AutoField(primary_key=True, null=False)
  uesr_id = models.CharField(max_length=50, null=False)
  password = models.IntegerField(max_length=50, null=False)
  email = models.CharField(max_length=100, null=False)
  phone_number = models.IntegerField(max_length=50, null=False)
  address = models.CharField(max_length=100, null=False)
