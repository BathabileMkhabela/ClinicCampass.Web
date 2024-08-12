import { create } from 'zustand';

const useAdminAuthStore = create((set)=>({
    adminStaffNum: '123456789',
    adminPWD: '987654321',
    authMessage: '',
    
    authMessageLoggedIn: ()=> set((state)=>({
       authMessage: 'Successfully logged-in'
    })),
    authMessageIncorrectPWD: ()=> set((state)=>({
         authMessage: 'Incorrect staff number or password',
    })),
}))
export default useAdminAuthStore