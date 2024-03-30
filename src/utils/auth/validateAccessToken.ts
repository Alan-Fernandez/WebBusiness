import { GraphQLClientSingleton } from '@/graphql'
import { customerName } from '@/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    if (!accessToken) {
        throw new Error('Access token is not available');
    }
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer } = await graphqlClient.request(customerName, {
        customerAccessToken: accessToken
    })
    return customer
}