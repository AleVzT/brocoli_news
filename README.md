
# Brocoli News

## Sobre la construcción de la App 🛠️
Trata de una App mobile hibrida desarrollada con ionic 5 con Angular. Esta app consume recursos de newsapi.org nos permite consultar inicialmente las noticias al dia de Argentina pero esto facilmente puede ser configurada para que traiga las noticias de tu pais de origen, ademas tambien nos permite consultar las noticias por categoria. Entre las funcionalidades esta añadir y borrar de favoritos una noticia y compartir en redes sociales u otras aplicaciones. Ademas tambien copiar el link de dicha notica.

## Comenzando 🚀
Para iniciar con la instalación y ejecución de la app web. debemos clonar el proyecto en el directorio de tu preferencia y donde no requieras permisos especiales para acceder

### Pre-requisitos 📋
Una vez teniendo los archivos que componen la app mobile en tu Pc. debemos verificar que contemos con ciertos pre-requisitos. 

```
Nota: acontinuacion te dare una serie de comandos deben ser utilizados en la terminal de tu sistema operativo.
```

1.- Node v10.15.3 o superior: Si no estas seguro sobre que version de node tienes instalada o si tienes instalado node en tu Pc debes ejecutar el siguiente comando 

```
node -v
```

Esto de deberia arrojar la version de node, en caso de que no sea asi te dejo un link para su instalación. 

    https://nodejs.org/es/download/

2.- Manejador de paquetes npm v6.14: este manejador de paquete por lo general viene con instalado por defecto cuando instalamos node pero de igual forma se los coloco para que verifiquen su existencia.

```
npm -v
```

En caso de no tenerlo o querer actualizar su versión podrias probar el siguiente comando.

```
npm install -g npm@latest
```

3.- Angular/Cli v7.3.9 o superior: Angular cli es una herramienta que te permite crear y ejecutar proyectos de angular de una forma mas facil, rapida y sencilla, para consultar su versión debemos ejecutar en la terminal el comando

```
ng --version
```

Esto deberia arrojar la versión instalada de lo contario deberá instalar la herramienta haciendo uso del siguiente comando.

```
npm install -g @angular/cli@latest
```
    
Esto instalará la última versión estable, la cual es valida para este proyecto.

4.- ionic/cli v5.4.16 o superior: Ionic cli es una herramienta que te permite crear y ejecutar proyectos de ionic de una forma mas facil, rapida y sencilla, para consultar su versión debemos ejecutar en la terminal el comando

```
ionic -v
```

Esto deberia arrojar la versión instalada de lo contario deberá instalar la herramienta haciendo uso del siguiente comando.

```
npm install -g @ionic/cli
```
    
Esto instalará la última versión estable, la cual es valida para este proyecto.

### Instalación 🔧
Una vez revisado y completada la lista de pre-requisitos podemos acceder a la instalación y ejecución de la app mobile en tu maquina loca.

Para esto es necesito que abrar la terminal de tu sistema operativo y navegues a la carpeta que contiene el proyecto.

Una vez dentro de la carpeta principal debemos ejecutar desde la terminal el siguiente comando.

```
npm install
```

Esto instalará todas las dependencias o paquetes de node necesarios para ejecutar la app mobile. Una vez finalizada esta instalación, estamos listo para levantar la app mobile localmente. Haciendo uso del comando

ionic serve

Una vez ejecutado este comando y compilado el código se deberia cargar de forma automatica, en tu navegador predeterminado la app mobile en el puerto :8100

Si por alguna extraña razon esto no llegará a pasar puedes colocar en la barra de direcciones de tu navegador web preferido la url

http://localhost:8100

Esto debería cargar la página inicial de nuestra app mobile.

```
NOTA IMPORTANTE:
Debemos tomar en cuenta que el acceso gratuito los datos de la api newsapi.org es solo para uso local, es decir de desarrollador. Si quieres implementar en un servidor publico la api bloquea la respuesta con la intension de ofrecerte el servicio pago.
```