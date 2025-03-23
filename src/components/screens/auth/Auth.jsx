import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Loader from '../../ui/Loader'
import Field from '../../ui/field/Field'

import styles from './Auth.module.scss'
import { Layout } from '../../layout/Layout.jsx'
import { Button } from '../../ui/button/Button.jsx'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../services/auth.services.js'

export const Auth = () => {
	const [type, setType] = useState('login')

	/*
	TODO:

	[] - Auth context
	[] - Axios
	[] - React Query

*/

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				alert('success')
				console.log(data)
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>

					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
