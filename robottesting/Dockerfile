FROM python:"3.6"
COPY test /test
WORKDIR /test
RUN pip install robotframework
RUN pip install -U requests robotframework-requests
CMD python -m robot.run Flaskapp.robot
