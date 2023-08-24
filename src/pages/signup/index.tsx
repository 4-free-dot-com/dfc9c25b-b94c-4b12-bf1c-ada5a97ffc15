import React from 'react'
import cx from 'classnames'
import styles from './signup.module.css'

import { Input, Button } from 'antd'

interface Props {
  className?: string
}

const Signup = ({ className = '' }: Props) => {
  return (
    <div className={styles.root}>
      <span className={styles.text}>Create account</span>

      <Input placeholder="Username" className={styles.input} />

      <Input placeholder="Email" className={styles.input1} />

      <Input.Password
        placeholder="Password"
        className={styles.inputPassword}
      />

      <Input.Password
        placeholder="Password"
        className={styles.inputPassword1}
      />

      <span className={styles.text1}>Username</span>

      <span className={styles.text2}>Email</span>

      <span className={styles.text3}>Password</span>

      <span className={styles.text4}>Repeat password</span>

      <Button type="primary" className={styles.button}>
        <span className={styles.text5}>Signup</span>
      </Button>
    </div>
  )
}

export default Signup
