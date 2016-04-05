c test.f adds five to 0d, 1d and 2d arrays.

      subroutine test0d(a, b)
      
      real a, b
cf2py intent(out) b
      
      b = a + 5.0
      
      return
      end
      
c ------------------------------
      
      subroutine test1d(a, b, c, L)
      
      integer L, i
      real*8 a(1:L)
      real*8 b(1:L)
      real*8 c(1:L)
cf2py intent(out) b
cf2py intent(out) c
      
      do i=1,L
          b(i) = a(i) + 5.0
          c(i) = b(i) / 5.0
      end do
      
      return
      end
      
c ---------------------------------
      
      subroutine test2d(a, b, L, M)
      
      integer L, M, i, j
      real*8 a(1:L, 1:M)
      real*8 b(1:L, 1:M)
cf2py intent(out) b
      
      do j=1,M
          do i=1,L
              b(i,j) = a(i,j) + 5.0
          end do
      end do
      
      return
      end
