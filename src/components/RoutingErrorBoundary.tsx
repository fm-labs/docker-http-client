import React from 'react'
import { useRouteError } from 'react-router-dom'
import Layout from './Layout.tsx'
import { Container } from 'react-bootstrap'
import { DOCKER_HTTP_BASEURL } from '../constants.ts'

const RoutingErrorBoundary = () => {

  let error = useRouteError() as Error;
  console.error(error);
  // Uncaught ReferenceError: path is not defined

  return (
    <Layout>
      <Container className={"text-center"}>
        <span className={"fw-bold"}>Sappalot, something went wrong :/</span>
        <h1 className={"my-5"}>{error && error?.message && error?.message}</h1>

        {error?.message?.toLowerCase() === "network error" && <p>
          Are you sure the docker-http server is running on{' '}
          <a target={"_blank"} href={DOCKER_HTTP_BASEURL}>{DOCKER_HTTP_BASEURL}</a> ?
        </p>}
      </Container>
    </Layout>
  )
}

export default RoutingErrorBoundary
