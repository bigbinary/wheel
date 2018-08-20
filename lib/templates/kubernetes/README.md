#### Deploy wheel on kubernetes.

Create postgres db and service.

`kubectl create -f db-deployment.yml -f db-service.yml`

Create configmap for database.yml.

`kubectl create -f database-configmap.yml`

Create web/puma deployment and service.

`kubectl create -f web-deployment.yml -f web-service.yml`

Create background/delayed_job deployment and service.

`kubectl create -f background-deployment.yml -f background-service.yml`

Get application endpoint.

```
$ kubectl get svc web -o wide | awk '{print $4}'
a55714dd1a22d11e88d4b0a87a399dcf-2144329260.us-east-1.elb.amazonaws.com
```
