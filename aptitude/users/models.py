from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserCreating(BaseUserManager):
    # 일반 user 생성
    def create_user(self, email, nickname, name, address, password=None):

        # 값이 없는 경우
        if not email:
            raise ValueError('There is no user email.')
        if not nickname:
            raise ValueError('There is no user nikckname.')
        if not name:
            raise ValueError('There is no user name.')
        if not address:
            raise ValueError('There is no user address.')

        # 계정 생성
        user = self.model(
            email = self.normalize_email(email),
            nickname = nickname,
            name = name,
            address = address,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(default='', max_length=100, null=False, blank=False, unique=True)
    nickname = models.CharField(default='', max_length=100, null=False, blank=False, unique=True)
    name = models.CharField(default='', max_length=100, null=False, blank=False)
    address = models.CharField(default='', max_length=100, null=False, blank=False)

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)
    
    # 헬퍼 클래스 사용
    objects = UserCreating()

    # 사용자의 username field는 nickname으로 설정
    USERNAME_FIELD = 'nickname'
    # 필수로 작성해야하는 field
    REQUIRED_FIELDS = ['email', 'name']

    def __str__(self):
        return self.nickname