import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright &copy; 2022 All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://github.com/RayenBakali" target="_blank" rel="noopener noreferrer">
          Rayen Bakali
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
