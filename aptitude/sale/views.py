from django.shortcuts import render

def sale_list(request):
  return render(request, 'sale_list.html', {})

def sale_detail(request):
  return render(request, 'sale_detail.html', {})
  