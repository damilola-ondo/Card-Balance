import { supabase } from '../supabaseClient'

export const saveGiftCardPin = async (pin) => {
    console.log('Sending pin:', pin)
    const { data, error } = await supabase
        .from('gift_card_pins')
        .insert([{ pin }])

    console.log('Supabase response:', data, error)

    if (error) throw error
    return data
}