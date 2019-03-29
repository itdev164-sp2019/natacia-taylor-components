import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import {Button, IconButton, Section } from '../components/Elements'
import { Search } from 'styled-icons/feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    Lorem Ipsum is simply 
    dummy text of the printing and 
    typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy 
    ext ever since the 1500s, when an 
    unknown printer took a galley of type 
    and scrambled it to make a type specimen
     book. It has survived not only five 
     centuries, but also the leap into 
     electronic typesetting, remaining 
     essentially unchanged. It was popularised
      in the 1960s with the release of Letraset sheets 
      containing Lorem Ipsum passages, and
       more recently with desktop publishing 
       software like Aldus PageMaker including versions
        of Lorem Ipsum.
  </Layout>
)

export default IndexPage
