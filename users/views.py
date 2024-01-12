from rest_framework.generics import CreateAPIView, ListAPIView
from .serializers.common import RegistrationSerializer
from django.contrib.auth import get_user_model

Userauth = get_user_model()

# Path: /register/
# Methods: POST
class RegisterView(CreateAPIView):
  queryset = Userauth.objects.all()
  serializer_class = RegistrationSerializer