FROM tailordev/pandas

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY . /usr/src/app
ADD . /usr/src/app/

RUN pip install -r /usr/src/app/requirements.txt
RUN pip install numpy

EXPOSE 80

ENTRYPOINT ["python"]

CMD ["start.py","prod"]
