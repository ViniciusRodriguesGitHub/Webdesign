from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time

# Configuração do WebDriver (use o caminho do seu próprio WebDriver)
driver_path = '/path/to/your/chromedriver'
driver = webdriver.Chrome(driver_path)

# URL da página
url = "https://ais.usvisa-info.com/pt-br/niv/schedule/63583540/appointment?applicants%5B%5D=75182191&applicants%5B%5D=75216843&confirmed_limit_message=1&commit=Continuar"

# Abre a página
driver.get(url)

# Espera a página carregar
time.sleep(5)  # ajuste o tempo conforme necessário

# Localiza o elemento desejado com o seletor CSS
try:
    element = driver.find_element(By.CSS_SELECTOR, "#ui-datepicker-div > div.ui-datepicker-group.ui-datepicker-group-first > table > tbody > tr:nth-child(2)")

    # Extrai o HTML do elemento
    html_content = element.get_attribute('outerHTML')

    # Analisa o HTML com BeautifulSoup para manipulação mais fácil
    soup = BeautifulSoup(html_content, 'html.parser')
    print(soup.prettify())

finally:
    # Fecha o navegador
    driver.quit()