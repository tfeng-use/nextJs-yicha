import styled from './index.less';
export default () => (
  <div style={{ marginTop: 100 }}>
    这儿是test
    <div className={styled.parent}>
      我是parent
      <div className={styled.child}>
        child
      </div>
    </div>
  </div>
)
