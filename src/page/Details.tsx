
import '../App.css'
import { CircularProgress, Box } from '@mui/material'
import { useAppDispatch, useAppState } from '../context'
import { deleteDetailsAction } from '../context/action'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Details() {
  const {state} = useAppState()
  const dispatch = useAppDispatch()
  const finalItem = state.details

  const handleClick = () => {
    deleteDetailsAction(dispatch)
  }


  if (!finalItem) {
    return <Box display='flex' alignItems='center' justifyContent='center' height='100vh' width='100%'>
      <CircularProgress />
    </Box>;
  }

  return (
    <section className='details'>
      <ArrowBackIcon
        onClick={handleClick}
        sx={{ cursor: 'pointer', position: 'absolute', top: '75px', left: '20px', fontSize: '2rem' }}
      ></ArrowBackIcon>
      {<div>
        <img src={finalItem.img} alt="" />
        <div>
          <h1>Details</h1>
          <h4>name :</h4>
          <p>{finalItem.name} </p>
          <h4>birthday :</h4>
          <p>{finalItem.birthday}</p>
          <h4>occupation :</h4>
          <p>{finalItem.occupation[0]}</p>
          <h4>nickname : </h4>
          <p>{finalItem.nickname} </p>
        </div>
      </div>}
    </section>
  )
}

export default Details