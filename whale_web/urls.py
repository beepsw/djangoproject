"""
URL configuration for whale_web project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from data_driven import views  # Import the views module

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('data_driven.urls')),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.login_view, name='home'),  # Ruta para redirigir a login por defecto
    path('dashboard/', views.dashboard_view, name='dashboard'),  # Define la vista del dashboard
    path('register/', views.register_view, name='register'),
]