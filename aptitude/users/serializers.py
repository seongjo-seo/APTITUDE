# from .models import User
# from . import serializers

# class UserSerializer(serializers.ModelSerializer):
#     def create(self, validated_data):
#       # 계정 생성
#         user = User.objects.create_user(
#             email = validated_data['email'],
#             nickname = validated_data['nickname'],
#             name = validated_data['name'],
#             password = validated_data['password']
#         )
#         return user
#     class Meta:
#         model = User
#         fields = ['nickname', 'email', 'name', 'password']