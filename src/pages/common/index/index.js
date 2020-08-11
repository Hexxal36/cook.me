import React from 'react'
import PageLayout from '../../../layouts/master'
import CardStack from '../../../components/card-stack'

const IndexPage = ({ match }) => {

  return (
    <PageLayout>
      <CardStack user={match.params.username} query={match.params.query}/>
    </PageLayout>
  )
}

export default IndexPage