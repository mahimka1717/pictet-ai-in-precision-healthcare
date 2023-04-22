import s from '~/src/components/Quote.module.sass'
import Icon from '~/src/assets/quotes.svg'

const Quote = (p) => {
	return (
		<figure className={s.figure} data-id={p.data.id} data-anim="quote">
			<div className={s.box}>
				<div className={s.line} data-anim="quote-line"></div>
				<blockquote className={`${s.quote} ag-fromfade2`} dangerouslySetInnerHTML={{__html: p.data.quote }} />
				<div className={s.line} data-anim="quote-line"></div>
			</div>
			<Icon />
			<figcaption className={s.h3} dangerouslySetInnerHTML={{__html: p.data.h3 }} />
		</figure>
	);
}

export default Quote;
