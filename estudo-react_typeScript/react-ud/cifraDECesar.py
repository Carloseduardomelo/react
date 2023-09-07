# Cifra de César em Python
# Adaptado do livro "Hacking Secret Ciphers with Python", de Al Sweigart
# Licença Creative Commons Attribution-Noncommercial-Share Alike 3.0
 
# Solicitando o texto a ser encriptado ou decriptado:
texto = input('Digite a mensagem a ser encriptada ou decifrada: ')
# Chave a ser utilizada
chave = int(input('Entre com o valor da chave (deslocamento): '))
# Determinar modo de operação (E = encriptar; D = decriptar)
modo = input('Escolha E para encriptar ou D para decriptar o texto: ')
# Conjunto de caracteres válidos no algoritmo
CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
# Variável para armazenar o texto criptografado (ou decifrado)
convertido = ''
# Converter todo o texto em maiúsculas:
texto = texto.upper()
# Código que será executdo em cada caractere do texto:
for caractere in texto:
  if caractere in CARACTERES:
 # Obter o número criptografado ou decriptado do caractere
    num = CARACTERES.find(caractere)
 # Obter o número do caractere
    if modo == 'E':
      num = num + chave
    elif modo == 'D':
      num = num - chave
 # Manipulando a rotação se o valor de num for maior do que o comprimento de CARACTERES ou menor que 0
  if num >= len(CARACTERES):
    num = num - len(CARACTERES)
  elif num < 0:
    num = num + len(CARACTERES)
 # Adicionar (concatenar) o caractere correspondente a num na variável convertido
    convertido = convertido + CARACTERES[num] 
  else:
 # Concatenado o caractere sem efetuar criptografia ou decifragem
    convertido = convertido + caractere
# Mostrar o texto encriptado ou decifrado na tela:
if modo == 'E':
  print('O texto criptografado é ', convertido)
if modo == 'D':
  print('O texto decriptado é ', convertido)