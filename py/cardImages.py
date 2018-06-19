import json, os
import urllib
import urllib.request
from selenium import webdriver
from bs4 import BeautifulSoup
from tomato import tomato
import wget

domain = 'https://en.wikipedia.org'
url = 'https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck'
scraper = tomato()
soup = scraper.changeUrl(url)

cardList = soup.find_all('li', class_='gallerybox')
imgList = []
for each in cardList:
	imgList.append(each.find('a')['href'])

l = []
for each in imgList:
	soup = scraper.changeUrl(domain + each)
	thing = soup.find('div', class_='fullImageLink').find('a')['href']
	print(thing)
	l.append(thing)


for href in l:
	fname = href.split('.')[-2] + '.jpg'
	print('downloading ' + fname)
	fname = wget.download('http:' + href)
