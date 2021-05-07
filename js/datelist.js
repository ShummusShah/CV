
var quotes = [
'Go watch the next film that is showing on at the cinemas, whatever it may be',
'Rooftop bar with a view',
'PUB CRAWL! ',
'Go Axe throwing',
'WILD CARD - Do whatever you want to do.',
'Hit a market - Maybe Brick Lane? Obligatory Pub crawl to follow',
'Go do an escape room',
'Visit the Sky Garden on the 43rd Floor of the Walkie Talkie for views of london',
'Go to a stand up comedy night!',
'Take in the view from the Shard, enjoy a bit of champers',
'Go to a fancy restaurant',
'Go bowling',
'Rent a speedboat on the thames',
'Mini golf',
//'Netflix and Chill',
'Improve your aim at Flightclub / Shuffle Club',
'Bottomless Brunch',
'Clapham - Four thieves and then hit up surrounding bars',
'Go on the London Eye + River Cruise',
//'To be is to be perceived (Esse est percipi)– Bishop George Berkeley',
//'Happiness is not an ideal of reason but of imagination – Immanuel Kant',
//'No mans knowledge here can go beyond his experience – John Locke',
//'God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us – Niccolo Machiavelli',
//'Liberty consists in doing what one desires – John Stuart Mill',
//'It is undesirable to believe a proposition when there is no ground whatever for supposing it true – Bertrand Russell',
//'Even while they teach, men learn – Seneca the Younger',
//'There is only one good, knowledge, and one evil, ignorance – Socrates',
//'If God did not exist, it would be necessary to invent Him – Voltaire',
//'This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities – Bertrand Russell',
//'One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another – René Descartes',
//'Leisure is the mother of philosophy – Thomas Hobbes',
//'Philosophy is a battle against the bewitchment of our intelligence by means of language – Ludwig Wittgenstein',
//'There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers – William James',
//'We are what we repeatedly do. Excellence, then, is not an act, but a habit – Aristotle',
//'Only one man ever understood me, and he didn’t understand me – G. W. F. Hegel',
//'The mind is furnished with ideas by experience alone – John Locke',
//'Life must be understood backward. But it must be lived forward  – Søren Kierkegaar',
//'Science is what you know. Philosophy is what you dont know – Bertrand Russell',
//'Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck – Immanuel Kant',
//'Philosophy is at once the most sublime and the most trivial of human pursuits – William James',
//'History is Philosophy teaching by examples – Thucydides',
//'He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god – Aristotle',
//'You can discover more about a person in an hour of play than in a year of conversation – Plato',
//'Things alter for the worse spontaneously, if they be not altered for the better designedly – Francis Bacon',
//'All that is necessary for the triumph of evil is that good men do nothing – mistakenly attributed to Edmund Burke',
//'Is man merely a mistake of Gods? Or God merely a mistake of mans? – Friedrich Nietzsche',
//'I would never die for my beliefs because I might be wrong – Bertrand Russell',
//'Religion is the sign of the oppressed ... it is the opium of the people – Karl Marx',
//'Happiness is the highest good – Aristotle',
//'If men were born free, they would, so long as they remained free, form no conception of good and evil – Baruch Spinoza',
//'The greater the difficulty, the more glory in surmounting it – Epicurus',
//'Whatever is reasonable is true, and whatever is true is reasonable – G. W. F. Hegel',
//'Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness – Immanuel Kant',
//'Man is condemned to be free” – Jean-Paul Sartre',
//'It is one thing to show a man that he is in error, and another to put him in possession of truth – John Locke',
//'I don’t know why we are here, but Im pretty sure it is not in order to enjoy ourselves – Ludwig Wittgenstein',
//'That man is wisest who, like Socrates, realizes that his wisdom is worthless – Plato',
//'The only thing I know is that I know nothing – Socrates',
//'All is for the best in the best of all possible worlds – Voltaire (in parody of Leibniz)',
//'The function of prayer is not to influence God, but rather to change the nature of the one who prays – Søren Kierkegaard',
//'Man is born free, but is everywhere in chains – Jean-Jacques Rousseau',
//'Man will never be free until the last king is strangled with the entrails of the last priest – Denis Diderot',
//'If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things – René Descartes',
//'Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative – Aristotle',
//'I can control my passions and emotions if I can understand their nature – Spinoza',
//'Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it – Karl Marx',
//'It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence – W. K. Clifford',
//'Virtue is nothing else than right reason – Seneca the Younger',
//'Freedom is secured not by the fulfilling of ones desires, but by the removal of desire – Epictetus',
//'In everything, there is a share of everything – Anaxagoras',
//'A little philosophy inclineth mans mind to atheism; but depth in philosophy bringeth mens minds about to religion – Sir Francis Bacon',
//'The brave man is he who overcomes not only his enemies but his pleasures – Democritus',
//'Good and evil, reward and punishment, are the only motives to a rational creature – John Locke',
//'To do as one would be done by, and to love ones neighbor as oneself, constitute the ideal perfection of utilitarian morality – John Stuart Mill',
//'Everything that exists is born for no reason, carries on living through weakness, and dies by accident – Jean-Paul Sartre',
//'Man is the measure of all things – Protagoras',
//'We are too weak to discover the truth by reason alone – St. Augustine',
//'The mind is furnished with ideas by experience alone – John Locke',
//'In life we’re just made to follow this path that’s not really thought out or adapted to everybody ~ Rhiannon Campbell 2021',
//'Even a clock that does not work is right twice a day. ~Polish proverb'
]



// will return a random number of the max length of the array
//var randomnumber = Math.floor(Math.random()*quotes.length);


function newDate() {
	var randomnumber = Math.floor(Math.random()*quotes.length);
	document.getElementById('quoteContainer').innerHTML = quotes[randomnumber];
}



//log on console for user the number of the quote is they wanted to see
console.log(Math.floor(Math.random()*quotes.length))


