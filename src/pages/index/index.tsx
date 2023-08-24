import React from 'react'
import cx from 'classnames'
import styles from './index.module.css'

import { Button, Input, AutoComplete } from 'antd'
import Link from 'next/link'

interface Props {
  className?: string
}

const Index = ({ className = '' }: Props) => {
  return (
    <div className={styles.root}>
      <Button type="primary" className={styles.button}>
        <span className={styles.text}>Login</span>
      </Button>

      <Input placeholder="Email" className={styles.input} />

      <Input.Password
        placeholder="Password"
        className={styles.inputPassword}
      />

      <span className={styles.text1}>
        Forgot your password? Click here
      </span>

      <span className={styles.text2}>Sign in to your account</span>

      <Button type="primary" className={styles.button1}>
        <span className={styles.text3}>Register new account</span>
      </Button>

      <Link href="/signup" className={styles.text4}>
        Powered by Kubi
      </Link>

      <AutoComplete
        notFoundContent="Not Found"
        options={[
          { value: 'Test 1' },
          { value: 'String 2' },
          { value: 'Value 3' },
          { value: 'Word 4' }
        ]}
        placeholder="Enter your something else..."
        defaultActiveFirstOption
        status="warning"
        className={styles.autoComplete}
      />

      <AutoComplete
        notFoundContent="Not Found"
        options={[
          { value: 'Test 1' },
          { value: 'String 2' },
          { value: 'Value 3' },
          { value: 'Word 4' }
        ]}
        placeholder="Enter search phrase..."
        defaultActiveFirstOption
        status="error"
        className={styles.autoComplete1}
      />

      <AutoComplete
        notFoundContent="Not Found"
        options={[
          { value: 'Test 1' },
          { value: 'String 2' },
          { value: 'Value 3' },
          { value: 'Word 4' }
        ]}
        placeholder="Enter search value..."
        defaultActiveFirstOption
        status="error"
        className={styles.autoComplete2}
      />

      <span className={styles.text5}>Please enter search phrase</span>

      <span className={styles.text6}>Text</span>
    </div>
  )
}

export default Index
