from django.urls import path, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login_view, name='login'),
    path('index/', views.index, name='index'),
    path('', lambda request: redirect('login')),  # Redirige la raíz a la vista de inicio de sesión
]