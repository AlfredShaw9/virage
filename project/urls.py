from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/cars/', include('cars.urls')),
    path('api/users/', include('users.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/carstoid/', include('carstoid.urls')),
    re_path(r'^.*$', index)
]
