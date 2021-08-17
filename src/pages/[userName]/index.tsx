import PageHead from 'src/components/PageHead'

const description = ''

// [userName] = @{userName}
function UserPage() {
  return (
    <PageHead title="소복 - " description={description}>
      유저 페이지
    </PageHead>
  )
}

export default UserPage
