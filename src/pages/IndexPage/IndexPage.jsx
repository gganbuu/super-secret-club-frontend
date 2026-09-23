import React from 'react'
import { Link } from 'react-router'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const IndexPage = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center gap-[1rem]">
      <h1 className="text-4xl font-bold">Super Secret Club</h1>
      <Link>
        <PrimaryButton name="See messages" />
      </Link>
    </main>
  )
}

export default IndexPage