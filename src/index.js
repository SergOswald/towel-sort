
module.exports = function towelSort ( matrix ) {

  if( arguments.length === 0 || matrix.length === 0 ) {
    return [] ;
  }
  
  var a = [] ;
  var b = [] ;
  var lenMatrix =  matrix.length ;
  for( let i = 1 ; i < lenMatrix ; i = i + 2 ) {
  a[ i ] = matrix[ i ].reverse() ;
  } ;
  
  for( let i = 0 ; i < lenMatrix ; i = i + 2 ) {
  b[ i ] = matrix[ i ] ;
  } ;
  
  var c = b[ 0 ] ;
  for( let i = 0 ; i < lenMatrix ; i++ ) {
  c = c.concat( a[ i ] ).concat( b[ i + 1 ] ) ;
     
  } ;
  
  return c.filter( e => e !== undefined ) ;

} ;

