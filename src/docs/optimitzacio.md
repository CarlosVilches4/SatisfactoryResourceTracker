# Optimització

## OnPush

Els components on s'ha implementat onPush són `targeta-taladro-component` i `detall-component`.
Motiu: Angular revisa els components encara que nada hagi cambiat. Implementant onPush angular només comprovarà las targetes quan alguna dada hagi canviat en comptes de revisar-les totes en cada cicle.

## Virtualització

`ItemSize`: La targeta medeix 250px + 16px de marge = `266px`
`Nº d'elements: `50`