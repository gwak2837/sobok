import Image from 'next/image'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.5rem;
`

const images = [
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200812_81%2F1597223302326skrLs_JPEG%2Fupload_888e4e8977d7c4b98da4365f06c75852.jpeg',
  'https://map.naver.com/v5/search/%ED%9D%91%EC%84%9D%EC%BB%A4%ED%94%BC/place/1944466175?c=14132535.8417378,4510098.5160541,15,0,0,0,dh&placePath=%3Fentry%253Dpll',
  'https://map.naver.com/v5/search/%ED%9D%91%EC%84%9D%EC%BB%A4%ED%94%BC/place/1944466175?c=14132535.8417378,4510098.5160541,15,0,0,0,dh&placePath=%3Fentry%253Dpll',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjNfMjA1%2FMDAxNjA4NzE5MjMxNjM1.mrnNHA6pxPRKDT1R1PtCq71xPj8C_LxlggtwOEeNb2Mg.CUi6AbZOVk9u0URMOydFIIXXZ84Pe4G0UTq3JwzEENgg.JPEG.nare3030%2FIMG_3859.jpg',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDNfMjU4%2FMDAxNjA0MzM3MzI4NTc5.IpkHgj_3wQPn98Oukxt0jlv-sxVHhvgyUi-gGUc3OUQg.dzqqFsA8qw4zMexVDtt1AVOgC4ss-6VVc39Yu3sBdBcg.JPEG.aacad85%2FIMG_2955.JPG',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTRfODUg%2FMDAxNjAwMDkzNDM5MDk0.5VRa8NVX2yf6MbCxz7Nt02gjMi8yi_ylb7klJ-IBQXgg.cSVniEigsoTgx42mA4QZL5hIu9kn4ESE31PMcI9q29gg.JPEG.kohyoeunhong%2FIMG_4001.jpg',
  'https://storage.googleapis.com/sobok/%EA%B9%80%ED%9A%A8%EC%A7%84.webp',
  'https://storage.googleapis.com/sobok/%EA%B3%BD%ED%83%9C%EC%9A%B1.webp',
  'https://storage.googleapis.com/sobok/%EB%B0%95%EC%88%98%ED%98%84.webp',
  'https://storage.googleapis.com/sobok/%EA%B9%80%EB%AF%BC%ED%98%B8.webp',
  'https://storage.googleapis.com/sobok/%EA%B8%B0%EC%9A%B0%ED%98%84.webp',
  'https://storage.googleapis.com/sobok/%EA%B9%80%EC%A7%84%ED%9A%A8.webp',
  'https://storage.googleapis.com/sobok/%EA%B3%BD%EC%9A%B1%ED%83%9C.webp',
  'https://storage.googleapis.com/sobok/%EB%B0%95%ED%98%84%EC%88%98.webp',
  'https://storage.googleapis.com/sobok/%EA%B9%80%ED%98%B8%EB%AF%BC.webp',
  'https://storage.googleapis.com/sobok/%EA%B8%B0%ED%98%84%EC%9A%B0.webp',
]

function HomePage() {
  return (
    <PageHead>
      <GridContainer>
        {images.map((imageUrl, i) => (
          <Image key={i} src={imageUrl} alt={imageUrl} width="300" height="300" objectFit="cover" />
        ))}
      </GridContainer>
    </PageHead>
  )
}

export default HomePage
