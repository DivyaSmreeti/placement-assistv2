from django.urls import path
from . import views

urlpatterns = [  
        path('adminpage/',views.homePage,name='adminpage'),
        path('student/',views.student,name='student')
    ]  