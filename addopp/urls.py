from django.urls import path
from . import views

urlpatterns = [  
        # path('admin/', views.homePage,name='adminpage'),  # app homepage
        # path('student/', views.student,name='student'),  # app student
        path('adminpage/',views.homePage,name='adminpage'),
        path('student/',views.student,name='student')
    ]  