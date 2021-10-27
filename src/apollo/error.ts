import { ApolloError } from '@apollo/client'
import { toast } from 'react-toastify'

export function toastApolloError(error: ApolloError) {
  toast.warn(error.message)
}
