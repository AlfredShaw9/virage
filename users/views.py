from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from .serializers.common import RegistrationSerializer, GarageSerializer
from django.contrib.auth import get_user_model

Userauth = get_user_model()

# Path: /user/register/
# Methods: POST
class RegisterView(CreateAPIView):
  queryset = Userauth.objects.all()
  serializer_class = RegistrationSerializer

# Path: /user/
# Methods: GET
class GarageAllView(ListAPIView):
  queryset = Userauth.objects.all()
  serializer_class = GarageSerializer

# Path: /user/:user-id
# Methods: GET
class UsernameView(RetrieveAPIView):
  queryset = Userauth.objects.all()
  serializer_class = GarageSerializer