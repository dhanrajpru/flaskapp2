*** Settings ***
Library  Collections
Library  RequestsLibrary

*** Variables ***
${url}  %{FLASK_DEMO_URL}

*** Test Cases ***
Flaskapp testing
    Create Session  getjson  ${url}
    ${result}  Get Request  getjson   /json
    ${json1}=  Set Variable  ${result.json()}

    ${keys}  Get Dictionary Keys  ${json1}

    ${L2}  Create List  Hostname  Server Hit  LocalAddress  StartTime  RemoteAddress
    Sort List  ${L2}
    Sort List  ${keys}

    Should Be Equal  ${keys}  ${L2}
    Should Be Equal  ${result.status_code}  ${200}
