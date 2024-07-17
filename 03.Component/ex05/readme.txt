ex05: Component Lifecycle & useEffect


<1> Class Component: Component Lifecycle
1. LifecycleI: mount
    1) constructor
    2) getDerivedStateFromProps
    3) render ***
    4) componentDidMount ***
2. LifecycleII: update
    1) getDerivedStateFromProps
    2) shouldComponentUpdate *
    3) render ***
    4) getSnapshotBeforeUpdate
    5) componentDidUpdate ***
3. LifecycleIII unmount
    1) componentWillUnmount() ***
4. 실습: src/01



<2> Functional Component: useEffect(Component Alternative Lifecycle)
1. getDerivedStateFromProps 대체
2. After Rendering (componentDidUpdate 대체)
3. componentDidMount, componentWillUnmount
4. 어떤 특정 상태의 변화에 반응하는 After Rendering
5. 실습: src/02



<3> Clock Component I: Class Component
1) 실습: src/03



<4> Clock Component II: Function Component: 과제
1) src/04
2) 과제





== 테스트 =================

$ npm start src=(01|02|03|04)
