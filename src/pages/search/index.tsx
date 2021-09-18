import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'
import SearchFormLayout from 'src/layouts/SearchFormLayout'

const description = ''

export default function SearchPage({ children }: { children: ReactNode }) {
  return <PageHead title=" - 소복" description={description}>{}</PageHead>
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchFormLayout>{page}</SearchFormLayout>
}
