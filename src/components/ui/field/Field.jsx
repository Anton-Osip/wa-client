import s from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input {...register(name, options)} {...rest} className={s.input} />
			{error && <div className={s.error}>{error}</div>}
		</div>
	)
}

export default Field
