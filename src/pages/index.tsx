import Image from 'next/image'
import Link from 'next/link'
import PageHead from 'src/components/PageHead'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.5rem;
`

const SquareFrame = styled.div`
  padding-top: 100%;
  position: relative;

  img {
    transition: transform 1s;
  }

  img:hover {
    transform: rotateY(180deg);
  }
`

const images = [
  'https://postfiles.pstatic.net/MjAyMDEwMjdfMTAy/MDAxNjAzNzgxNDgwMjg0.J8-WApjPws8BwMJCU53c3yq3ut_GQ-NXMXlOUurslNMg.LhjqprA7bofyNG0YhzWxozz5BR_ZvAJ7nn_OE4tYIaEg.JPEG.jjypink81/SE-7cc5973e-31b5-41dd-9008-aa142f86f0ed.jpg?type=w773',
  'https://postfiles.pstatic.net/MjAyMDEwMjdfMjky/MDAxNjAzNzgxNTQxMzQ2.mb2L2V5jgVjq2kBrIqHdYUv-WqxmgliYRelH5po4Wy8g.n7bH95FFsQYKPWMG3HxBhvIDMZTlTgTD_yPjqdkWVpcg.JPEG.jjypink81/SE-9ab9b0bb-949e-48b5-978a-b2c79301978d.jpg?type=w773',
  'https://postfiles.pstatic.net/MjAyMDEwMjdfNzIg/MDAxNjAzNzgxNTQ5MDQ3.R1QJOe01vP9iYh8iXMq7iMNgp65eYJm1qqTgvn6D5F4g.PObKW3w8lQOxz5_TSJG8griA_j5szovbMuBuRXELmmIg.JPEG.jjypink81/SE-03706234-a54c-4685-85ee-0f677b29bf61.jpg?type=w773',
  'https://postfiles.pstatic.net/MjAyMDAxMjFfMjQ4/MDAxNTc5NTY1MzkwMzQ3.gOx8j-FYxnxfseIOxd3TjaadGuqUsRhBPxvCtTf4jPog.k0n5hdse9XDzaBM_JrY58jaM4Bw-JwrADsb_ZGKXY1Qg.JPEG.shl992/SE-33ee3c5f-a114-4dfe-95cf-8c5e47233eb4.jpg?type=w966',
  'https://postfiles.pstatic.net/MjAyMDAxMjFfMTc3/MDAxNTc5NTM1MjE1OTAx.fUYPF_Jbj83uRJsPc0RQ9HTgxLqbdlK2KxJpY0r_FX0g.BDlXxzYNkX_mihe0iD2t8S25AUIBEPdwNwjLip1V-SIg.JPEG.shl992/IMG_4554.jpg?type=w966',
  'https://postfiles.pstatic.net/MjAyMDAxMjFfMTA3/MDAxNTc5NTY1MzU3MjIx.IhfWMypmOssGevgnUmWRTOV5YwU38QtxTidIx0h8208g.ChxGj03jeJSHqMIMBCezieJukvWBbwjnVXsQ7eNEPCIg.JPEG.shl992/SE-b6e797ed-e762-4937-8182-6fc8d20fa352.jpg?type=w966',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200812_81%2F1597223302326skrLs_JPEG%2Fupload_888e4e8977d7c4b98da4365f06c75852.jpeg',
  'https://postfiles.pstatic.net/MjAxODEwMjlfMTQw/MDAxNTQwNzkyNjQwMTUz.Izj58h5ZYdp-Ickpm6lUVB4ZWnxudAjbf7-lTsN-wYQg.HZQL8l0de78g0wpVJWE5Lwo_0Gb9yhGWJnXIXUSA_AAg.JPEG.cuyss/IMG_3846.jpg?type=w580',
  'https://postfiles.pstatic.net/MjAxODEwMjlfOTEg/MDAxNTQwNzkyNjM5NTcz.55popOEnNuYOPQsVb1ScVAzKV9zdyeBglF_fmOPURHkg.KGaDAeolGyLlrJxq7gQJA4PK2RswIe7jm1MrJvDjgNkg.JPEG.cuyss/IMG_3844.jpg?type=w580',
  'https://postfiles.pstatic.net/MjAxODEwMjlfMzcg/MDAxNTQwNzkyNjQwNzM2.P60hkdEXQ3be0U86DD5OK_Cnz9VsgY7dcK3PCdj22bsg.e84zLRubKj1mYXvRrtRTN-La73X9W9tSZrN2Pf9ajAwg.JPEG.cuyss/IMG_3850.jpg?type=w580',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjNfMjA1%2FMDAxNjA4NzE5MjMxNjM1.mrnNHA6pxPRKDT1R1PtCq71xPj8C_LxlggtwOEeNb2Mg.CUi6AbZOVk9u0URMOydFIIXXZ84Pe4G0UTq3JwzEENgg.JPEG.nare3030%2FIMG_3859.jpg',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDNfMjU4%2FMDAxNjA0MzM3MzI4NTc5.IpkHgj_3wQPn98Oukxt0jlv-sxVHhvgyUi-gGUc3OUQg.dzqqFsA8qw4zMexVDtt1AVOgC4ss-6VVc39Yu3sBdBcg.JPEG.aacad85%2FIMG_2955.JPG',
  'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTRfODUg%2FMDAxNjAwMDkzNDM5MDk0.5VRa8NVX2yf6MbCxz7Nt02gjMi8yi_ylb7klJ-IBQXgg.cSVniEigsoTgx42mA4QZL5hIu9kn4ESE31PMcI9q29gg.JPEG.kohyoeunhong%2FIMG_4001.jpg',
  'https://storage.googleapis.com/sobok/%EC%95%84%EC%95%84.webp',
  'https://storage.googleapis.com/sobok/%ED%8F%BC%ED%8F%BC%EB%9D%BC%EB%96%BC_%EB%94%94%EC%A0%80%ED%8A%B8%EC%A0%95.webp',
  'https://storage.googleapis.com/sobok/%EC%B9%B4%ED%8E%98%EB%9D%BC%EB%96%BC_%EB%94%94%EC%A0%80%ED%8A%B8%EC%A0%95.webp',
  'https://storage.googleapis.com/sobok/%EB%B3%B5%EC%88%AD%EC%95%84%20%EC%95%84%EC%9D%B4%EC%8A%A4%ED%8B%B0_%EB%94%94%EC%A0%80%ED%8A%B8%EC%A0%95.webp',
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

export default function HomePage() {
  return (
    <PageHead>
      <div>
        <Link href="/@userId1">사용자 페이지</Link>
      </div>
      <div>
        <Link href="/@userId2">사용자2 페이지</Link>
      </div>
      <div>
        <Link href="/register">회원가입 페이지</Link>
      </div>
      <GridContainer>
        {images.map((imageUrl, i) => (
          <SquareFrame key={i}>
            <Image src={imageUrl} alt={imageUrl} layout="fill" objectFit="cover" />
          </SquareFrame>
        ))}
      </GridContainer>
    </PageHead>
  )
}
